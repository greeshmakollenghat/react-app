export const dynamicHandler=(event,component)=>{
return component.setState({
    [event.target.name]:event.target.value
})
};