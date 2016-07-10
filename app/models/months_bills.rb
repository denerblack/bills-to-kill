class MonthsBills
  include Mongoid::Document
  field :paid_at, type: Date
  embedded_in :month
  embedded_in :bill
  embedded_in :value
end
