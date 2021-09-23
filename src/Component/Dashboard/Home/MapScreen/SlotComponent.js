



import * as React from "react";
import SlotCard from "../SlotCard";

export default  function SlotComponent (props){
    return props.items.map((item) => {
      return <SlotCard key={item.id} spot={item} bookEvent={props.bookEvent} />;
    });
  };