class ContactMailer < ApplicationMailer
  def new_message(contact)
    @contact = contact
    @url = 'https://danielcheley.herokuapp.com'
    mail(
      to: Rails.application.secrets.GMAIL_USERNAME,
      subject: "New portfolio message!"
    )
  end
end
