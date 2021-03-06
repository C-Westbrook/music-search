
export default {
  
  search: {
    url: 'https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg',
    params: (key) => {
      return {
        is_xml: 0,
        format: 'jsonp',
        key: key,
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
      }
    },
    jsonp: 'jsonpCallback'
  },
  
  lyric: {
    url: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg',
    params: (id) => {
      return {
        nobase64:1,
        musicid:id,
        songtype:0
      }
    },
    jsonp:'callback'
  },
  
  first_page_data:{
    url:"https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg",
    params(){
      return{
        format:'jsonp',
        tpl:'v12',
        page:'other',
        rnd:0,
        g_tk:new Date().getTime(),
        loginUin:0,
        hostUin:0,
        inCharset:'utf8',
        outCharset:'GB2312',
        notice:0,
        platform:'yqq',
        needNewCode:0
      }
    },
    jsonp: 'jsonpCallback'
  }
}
