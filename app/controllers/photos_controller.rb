class PhotosController < ApplicationController
  def index
    photo_path = Rails.root.join('public', 'photos')
    image_files = Dir.glob(File.join(photo_path, '*.{jpg,jpeg,png,txt,gif,bmp}'))

    image_list = image_files.map do |file|
      {
        filename: File.basename(file),
        url: request.base_url + '/photos/' + File.basename(file)
      }
    end

    render json: image_list
  end
end
