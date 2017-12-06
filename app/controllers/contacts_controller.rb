class ContactsController < ApplicationController
  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      ContactMailer.new_message(@contact).deliver_later
      redirect_to root_url, notice: "Message sent. Thanks #{@contact.name}!"
    else
      render partial: "pages/contact"
    end
  end

private

def contact_params
    params.require(:contact).permit(:name, :organization, :phone, :email, :message)
  end
end
