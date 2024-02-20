import { reactive } from "vue";


export const store = reactive({
    list:[
        "Home",
        "Who We Are",
        "What We do",
        "Where We Worker",
        "Careers",
        "News"
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