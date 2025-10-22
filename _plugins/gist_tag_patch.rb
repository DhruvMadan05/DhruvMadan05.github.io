# frozen_string_literal: true

# Patch for jekyll-gist compatibility with Ruby 3.4+
# Fixes uninitialized constant TimeoutError and SSL issues

require 'timeout'
require 'jekyll-gist'

# Define TimeoutError as an alias for Timeout::Error if it doesn't exist
TimeoutError = Timeout::Error unless defined?(TimeoutError)

# Patch GistTag to disable SSL verification in development
module Jekyll
  module Gist
    class GistTag < Liquid::Tag
      def fetch_raw_code(gist_id, filename = nil)
        return code_from_api(gist_id, filename) if ENV["JEKYLL_GITHUB_TOKEN"]

        url = "https://gist.githubusercontent.com/#{gist_id}/raw"
        url = "#{url}/#{filename}" unless filename.to_s.empty?
        uri = URI(url)
        Net::HTTP.start(uri.host, uri.port,
          :use_ssl => uri.scheme == "https",
          :verify_mode => OpenSSL::SSL::VERIFY_NONE,
          :read_timeout => 3, :open_timeout => 3) do |http|
          request = Net::HTTP::Get.new uri.to_s
          response = http.request(request)
          response.body
        end
      rescue SocketError, Net::HTTPError, Net::OpenTimeout, Net::ReadTimeout, TimeoutError
        nil
      end
    end
  end
end
