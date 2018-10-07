json.name @song.name
json.id @song.id
if @song.audio.attached?
  json.audio url_for(@song.audio)
end
if @song.photos.attached?
  json.photos @song.photos.map { |photo| url_for(photo) }
end