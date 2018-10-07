class Song < ApplicationRecord
  has_one_attached :audio
  has_many_attached :photos
end