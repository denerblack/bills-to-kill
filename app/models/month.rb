class Month
  include Mongoid::Document
  field :year, type: Integer
  field :month, type: Integer
end
