class BillSerializer < ActiveModel::Serializer
  attributes :id, :name, :expiration_day, :fixed_value, :fixed, :finishing_at
end
