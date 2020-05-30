Vue.component('input-color', {
    props: ['input-color'],
    created() {
        document.querySelector("html").style.setProperty(this.inputColor.var, this.inputColor.color)
    },
    updated() {
        document.querySelector("html").style.setProperty(this.inputColor.var, this.inputColor.color);
    },
    
    template: `
        <div class="mb-3">
            <label for="size">{{ inputColor.title }}</label>
            <div class="input-group">
                <input type="color" v-model="inputColor.color" class="form-control input-color">
                <input type="text" class="form-control" v-model="inputColor.color">
            </div>
        </div>
    `,
})

var app = new Vue({
    el: '#app',
    data:{
        size: 10,
        inputs: [
            {
                color:  '#292929',
                title:  'Bordes',
                var:    '--border',
            },
            {
                color:  '#ADA1A1',
                title:  'Color Primario',
                var:    '--cat-color',
            },
            {
                color:  '#F6ECEC',
                title:  'Color Secundario',
                var:    '--secundary-color',
            },
            {
                color:  '#BE2D2D',
                title:  'Lineas',
                var:    '--color-lines',
            },
            {
                color:  '#F3ADB9',
                title:  'Orejas',
                var:    '--ears-color',
            },
            {
                color:  '#FBFBFB',
                title:  'Ojos',
                var:    '--eyes-color',
            },
            {
                color:  '#3F8417',
                title:  'Pupilas',
                var:    '--pupil-color',
            },
            {
                color:  '#4B1801',
                title:  'Bigotes',
                var:    '--moustache',
            },
        ]
    },
   
    computed: {
        catSize: function(){
            var sizes = this.size + "px";
            document.querySelector("html").style.setProperty("--grid-size", sizes);
            return sizes;
        },
    },
})