class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to root_url, notice: "Message sent. Thanks #{@contact.name}!"
    else
      render "contacts/new"
    end
  end

private
def contact_params
    params.require(:contact).permit(:name, :organization, :phone, :email, :message)
  end
end
