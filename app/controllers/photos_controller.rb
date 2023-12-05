class PhotosController < ApplicationController
  def index
    images = ActiveStorage::Blob.all.map do |blob|
    post = Post.find_by(id: blob.attachments.first.record_id)
    new_filename = "#{post.first_name}#{post.room_number}.#{blob.filename.extension}"
    blob.update(filename: new_filename)
      {
        filename: "#{post.first_name}#{post.room_number}",
        url: rails_blob_url(blob)
      }
    end

    render json: images
  end
end