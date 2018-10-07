# Directions

- `rails active_storage:install`
- `rails db:migrate`

---
consider moving to end
---

- Gemfile: `gem "aws-sdk-s3", require: false`
- config/storage.yml: comment in amazon block
  + create a bucket
  + set bucket name
  + set bucket region
- `EDITOR='code --wait' bin/rails credentials:edit`
- Top menu (s3) myName -> mySecurityCredentials -> createNewAccessKey
- close file
- config/environments/development + production: Change `config.active_storage.service` from `:local` to `:amazon`


### Backend
has_one_attached :audio
- change model
- change controller
- change jbuilder
  + check: `if song.audio.attached?`

### Frontend
- Add field for audio
- change save function to send formData


