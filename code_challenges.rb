# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

#create a method that takes an array as an arguement
#extract just numbers from array using
#iterate through array using select and search for only odd using odd built in method
#sort numbers using sort
#Refactored this many times to get it to work.  Was mostly struggling with using the .class properly to leverage the boolean value.  Then was struggling to get the proper placement of syntax for .odd? and .sort.

def only_odd array
  odd_array = array.select do |value|
    if value.class == Integer
      value.odd?
    end
 end
 odd_array.sort
end

p only_odd fullArr1
p only_odd fullArr2


# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'water', 'soda water']
#
# #create a method that takes an array and a letter stored as an arguement
# #use select on array to find if each value includes letter
#
def vowel_in_array (array, letter)
  array.select do |value|
    value.include? letter
  end
end
p vowel_in_array(beverages_array, letter_o)
p vowel_in_array(beverages_array, letter_a)
#
# # -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
#
album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'
#
# #create a method that takes a string as an arguement
# #store vowels in variable
# #use delete method to remove all vowels stored in variable
#
def no_vowels string
  string.delete 'aeiouAEIOU'
end
p no_vowels album1
p no_vowels album2
p no_vowels album3
#
#
# # --------------------4) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.
#
# # Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
#
class Bike
  def initialize(model, wheels, current_speed)
    @model = model
    @wheels = 2
    @current_speed = 0
  end

  def get_info
    puts "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end

  def pedal_faster number
     @current_speed += number
   end

   def brake number
    if @current_speed - number < 0
      @current_speed = 0
    else @current_speed -= number
      end
    end
  end


my_bike = Bike.new('Trek', 2, 0)
p my_bike.get_info
p my_bike.pedal_faster 10
p my_bike.brake 15


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
