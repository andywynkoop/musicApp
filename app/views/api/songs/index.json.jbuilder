@songs.each do |song|
  json.set! song.id do
    json.id song.id
    json.name song.name
    if song.audio.attached?
      json.audio url_for(song.audio)
    end
    if song.photos.attached?
      json.photos song.photos.map { |photo| url_for(photo) }
    end
  end
end
