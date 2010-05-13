require 'open3'
require 'json'

run lambda { |env|

  request  = Rack::Request.new(env)
  response = Rack::Response.new
  command  = request.params['command']

  response['Content-Type'] = 'application/json'

  if command
    io_stdin, io_stdout, io_stderr = Open3.popen3(command + '; echo $?')
    stderr = io_stderr.readlines
    stdout = io_stdout.readlines
    status = stdout.pop
    json = { :stdout => stdout.join, :stderr => stderr.join, :status => status }

    response.body = json.to_json
  end
  
  response.finish

}
