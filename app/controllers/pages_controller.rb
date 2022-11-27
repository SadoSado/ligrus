# frozen_string_literal: true

class PagesController < ApplicationController
  before_action :authenticate_user!, except: %i[show index]
  def home; end
end
