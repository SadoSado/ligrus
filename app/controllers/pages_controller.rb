class PagesController < ApplicationController
before_action :authenticate_user!, except: [:show, :index]
  def home
  end
end
