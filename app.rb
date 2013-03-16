class MyApp < Sinatra::Base

  get '/' do

      @title = "Home" 

      erb:index

  end

  get '/search' do

       @title = "search" 

       erb:search
  end

  get '/search/:n' do

       @q = params[:n]

       bing = Bing.new('49EB4B94127F7C7836C96DEB3F2CD8A6D12BDB71')

       results = bing.search(q=@q,sources='web')

       @title = "Bing"

       out = '<ol>'

       results['SearchResponse']['Web']['Results'].each do |item|

                out = out + '<li><h4><a target="_blank" href="'+ item['Url'] +'">' + item['Title'] + '</a></h4><p>'+ item['Description'] +'</p></li>'
       end

       out = out + '</ol>'

       @what = out;

       erb:search

  end
end

