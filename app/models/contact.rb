class Contact < ApplicationRecord
  validates :name, presence: true
  validates :message, presence: true
  validates :message, length: { maximum: 800 }
end
