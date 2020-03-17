# Nodejs01
Done basic with Mr.Nhat's help

# Yêu cầu
Viết chương trình chạy bằng nodejs để đọc n page từ các link nằm trong links.json (link là các trang nội dung được chia theo page, mình mới demo 1 link rồi, các bạn tự bỏ thêm vào 2,3 link nữa)
và lưu nội dung vào thư mục theo cấu trúc ngày/link/page.html (VD 12_3_2020/viblo.asia/page2.html)
số n được lấy từ terminal VD: node script.js 4 -> sẽ lấy 4 page đầu tiên của mỗi link

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
