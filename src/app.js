import { LightningElement, track } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";

  showFeatures = true;

  @track selectedvalues = [
    {"key": "Capacity","value": ["capacity1"]},
    {"key": "Price range","value": ["price1"]},
    {"key": "Offers","value": ["office1"]},
    {"key": "Operating System","value": ["os1"]}
    ]

  @track trackDead =   [
    /*  {"key":"Capacity","value":["64GB","128GB","256GB"],
      "nodeName":"storage"},
      {"key":"Operating System","value":["iOS"],
      "nodeName":"operatingSystem"}*/
          {
        "key": "Capacity",
        "value": [
            "128GB", 
            "129GB"
        ],
        "nodeName": "storage"
    }
    ]
      
@track privateOptions;
  handleRemove(eve) {
    console.log(eve.target.name)
    var removeItem = eve.target.name;
    this.trackDead = this.trackDead.filter(item => 
    item.value = item.value.filter(item3 => item3 !== removeItem));

    if(this.trackDead[0].value.length === 0) {
      console.log('last element')
    }


   // this.trackDead = this.trackDead.filter(item => console.log(item.value));
    }
}
