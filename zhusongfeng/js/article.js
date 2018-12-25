
 var  comment = new Vue({
    el: '#app',
    data: {
        //大图
        bigImg:'',
        showBigImg:false,
        //用户信息
        userInformation:[],
        //文章内容
        articleContent:[],
        //推荐列表
        articleList:[],
        //评论列表
        commentList:[],
        showVideo:false,
        video:'http://oss.songfuniaops.com/uploads/article/20181216/article_2b4111b50139e35355cb27951e01d1b8.mp4',
        videoImage:'http://oss.songfuniaops.com/uploads/article/20181214/article_ebae28b7e2b150ad8d1f816df937c473.jpg'
    },

    mounted() {
        //初始化数据
        this.init();


    },
    methods:{
        init: function () {
            var self = this;
            $.post('http://49.4.70.109/handring/public/api/index/getArticleDetail', {
                token: '33af75fa-8620-4dbd-8835-63aac2e3580a',
                article_id: 2 ,
                // article_id: 13 ,
            }, function (res) {
                if(res.code == 1){
                    console.log(111,res);
                    self.userInformation = res.data.author;
                    self.articleContent = res.data;
                    self.articleContent.video = self.video;
                    self.articleContent.videoImage = self.videoImage;

                }
            });
        },

    },
    created: function () {
        var self = this;
        // var url = location.search; //获取url中"?"符后的字串
        /*if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            self.articleID = decodeURIComponent(strs[0].replace("article_id=", ""));
            self.articleToken = decodeURIComponent(strs[1].replace("token=", ""));
        }*/

     },

});

