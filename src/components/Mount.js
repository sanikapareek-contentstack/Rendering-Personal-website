class Component{
    mount(el,data){
        if(data){
            if(el){
                el.appendChild(this.render(data));
                return;
            }
            document.body.appendChild(this.render(data));
            return
        }
        if(el){
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
    }
}

export default Component;