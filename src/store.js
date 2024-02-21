import { reactive } from "vue";


export const store = reactive({
    list:[

      {
        name:"Home",
        ref:""
      },
      {
        name:"Who We Are",
        ref:"are"
      },
      {
        name:"What We do",
        ref:"do"
      },
      {
        name:"Where We Worker",
        ref:"work"
      },
      {
        name:"Careers",
        ref:"carreer"
      },
      {
        name:"News",
        ref:"news"
      }
      ],
      plans:[
        {
          name:"Standard",
          value:"$",
          price:19.99,
          projects:"5",
          storage:"5",
          maxUser:"Unlimited"
        },
        {
          name:"Premium",
          value:"$",
          price:29.99,
          projects:"5",
          storage:"5",
          maxUser:"Unlimited"
        },
        {
          name:"Professional",
          price:39.99,
          value:"$",
          projects:"5",
          storage:"5",
          maxUser:"Unlimited"
        },
        {
          name:"Extreme",
          price:59.99,
          value:"$",
          projects:"5",
          storage:"5",
          maxUser:"Unlimited"
        },
      ]
    
    
});