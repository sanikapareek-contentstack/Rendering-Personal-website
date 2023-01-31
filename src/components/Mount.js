class Component{
    mount(el,data,cardFor){
        if(data){
            if(el){
                el.appendChild(this.render(data,cardFor));
                return;
            }
            document.body.appendChild(this.render(data,cardFor));
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