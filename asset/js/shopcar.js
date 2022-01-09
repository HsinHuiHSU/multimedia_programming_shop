
var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'巧克力戚風蛋糕',
            imgUrl:'https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/c631d0.jpg&w=500&h=500&fit=cover',
            price:'300',
            count:'2'
          },
          {
            id:'2',
            itemName:'香草鮮奶油戚風蛋糕',
            imgUrl:'https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/b85607.jpg&w=500&h=500&fit=cover',
            price:'300',
            count:'3'
          },
          {
            id:'3',
            itemName:'檸檬塔',
            imgUrl:'https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/ca6963.jpg&h=1000&fit=cover',
            price:'300',
            count:'1'
          },
          {
            id:'4',
            itemName:'抹茶漸層慕斯',
            imgUrl:'https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/1d1138_1604142195162.jpg&w=500&h=500&fit=cover',
            price:'300',
            count:'1'
          },
          {
            id:'5',
            itemName:'抹茶漸層慕斯',
            imgUrl:'https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/1d1138_1604142195162.jpg&w=500&h=500&fit=cover',
            price:'300',
            count:'1'
          },
    ]
    },
    methods:{
        handlePlus: function(item){
            item.count++;
        },
        handleSub: function(item){
            if(item.count>1){
            item.count--;                
            }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        }
    },
    computed:{

    }
})