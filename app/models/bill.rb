class Bill
  include Mongoid::Document
  field :name, type: String
  field :expiration_day, type: Integer
  field :fixed_value, type: Float
  field :fixed, type: Mongoid::Boolean
  field :finishing_at, type: Date

end
