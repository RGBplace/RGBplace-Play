<template>
    <v-container fluid>
        <canvas id="canvas" width="600" height="500"></canvas>
        <v-btn color="primary" @click="rotate">rotate</v-btn>
    </v-container>
</template>

<script>
    /* eslint-disable */

    let centreX = 600/2;
    let centreY = 500/2;
    let radius = 200;
    let rotateAngle = 51.4 * Math.PI / 180;
    let startAngle = 0;
    let endAngle = 51.4 * Math.PI / 180;

    let colours = ["#BAF4EE", "#4ED4C6", "#BAF4EE", "#4ED4C6", "#BAF4EE", "#4ED4C6", "#FF6347"];
    let labels = ['당첨','꽝','당첨','꽝','당첨','꽝','벌칙'];

    let counter = 0;

    export default {
        data () {
            return {}
        },
        methods : {
            init() {
                let canvas = this.$el.querySelector('#canvas');
                let ctx = canvas.getContext("2d");
                ctx.lineWidth = 3.0;

                this.drawWheel(canvas);

                ctx.beginPath();
                ctx.moveTo(centreX, centreY-210);
                ctx.lineTo(centreX+10, centreY-240);
                ctx.lineTo(centreX-10, centreY-240);
                ctx.closePath();

                // the outline
                ctx.lineWidth = 5;
                ctx.strokeStyle = '#666666';
                ctx.stroke();

                // the fill color
                ctx.fillStyle = "#FFCC00";
                ctx.fill();
            },
            drawWheel() {
                let canvas = this.$el.querySelector('#canvas');
                let ctx = canvas.getContext("2d");

                for (let i = 0; i < 7; i++) {
                    ctx.fillStyle = colours[i];
                    ctx.translate(centreX, centreY);
                    ctx.rotate(rotateAngle);
                    ctx.translate(-centreX, -centreY);
                    ctx.beginPath();
                    ctx.moveTo(centreX, centreY);
                    ctx.lineTo(centreX + radius, centreY);
                    ctx.arc(centreX, centreY, radius, startAngle, endAngle, false);
                    ctx.closePath();
                    ctx.fill();
                    ctx.save();

                    ctx.fillStyle = "black";
                    ctx.font = "15px verdana";
                    ctx.translate(centreX, centreY);
                    ctx.rotate(115*Math.PI/180);
                    ctx.translate(-centreX, -centreY);
                    ctx.fillText(labels[i], centreX-15, centreY-160);
                    ctx.restore();
                }
            },
            rotate(event, round) {
                if(!round) round = Math.ceil(Math.random() * 50)+100;

                let canvas = this.$el.querySelector('#canvas');

                let ctx = canvas.getContext("2d");
                ctx.translate(centreX, centreY);
                ctx.rotate(1);
                ctx.translate(-centreX, -centreY);

                counter++;
                if(counter < round) {
                    this.drawWheel();
                    requestAnimationFrame(this.rotate);
                } else {
                    counter = 0;
                }

            }
        },
        mounted() {
            //Use // eslint-disable-next-line to ignore the next line.
            //Use /* eslint-disable */ to ignore all warnings in a file.

            this.init();
        },
        name: "roulette"
    }
</script>

<style lang="scss" scoped>
</style>