class Controls{
    constructor(){
        this.forword = false;
        this.reverse = false;
        this.left = false;
        this.right = false;
        this.#addKeyboardListeners();
        
        console.log("Private Method Called")
    }
    


    #addKeyboardListeners(){
        console.log("Private Method Called")
        document.onkeydown = (event) => {
            switch(event.key){
                case 'ArrowUp':
                    this.forword = true;
                    break;
                case 'ArrowDown':
                    this.reverse = true;
                    break;
                case 'ArrowLeft':
                    this.left = true;
                    break;
                case 'ArrowRight':
                    this.right = true;
                    break;
            }
            console.table(this);
        }

        document.onkeyup = (e) => {
            switch(e.key){
                case 'ArrowUp':
                    this.forword = false;
                    break;
                case 'ArrowDown':
                    this.reverse = false;
                    break;
                case 'ArrowLeft':
                    this.left = false;
                    break;
                case 'ArrowRight':
                    this.right = false;
                    break;
            }
            console.table(this);
        }
    }
}