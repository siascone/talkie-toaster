@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :subject, :body, :user_id
    end
end