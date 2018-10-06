@songs.each do |song|
  json.set! song.id do
    json.id song.id
    json.name song.name
  end
end
