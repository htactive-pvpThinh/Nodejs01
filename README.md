# Nodejs01
Done basic with Mr.Nhat's help

Module used:
- request => get data from web, but now deprecated, should replace by node-fetch(just in assignment)
- fs-extra => create path and file
- process => can read arvg with command line (or can use yargs but not recommend)
- Something of promise haven't understand.

Solution:
1/ Architect
- process version 1 = links => downloadLink( "https://viblo.asia/newest?page=2 ) => request(downlink): Promise => content =>  Promise =>   file(done but something dont understand in promise)
- process version 2 = links => downloadLink( "https://viblo.asia/newest?page=2 ) => request(downlink): Promise => content => procees()  => Promise => file processWithNodeFetch = solution = pipe(haven't done).

2/ Technique
- How to take array from json
- Use rule tranform array to correct format in website (use map)
- linkDownload -> Promise -> content -> file
