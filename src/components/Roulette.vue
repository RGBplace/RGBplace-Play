<template>
    <v-container fluid>
        <v-row no-gutters
               align="center"
               justify="center"
        >
            <v-col align="center">
                <canvas id="canvas" width="350" height="350"></canvas>
                <v-btn color="primary" @click="rotate">rotate</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    //Use // eslint-disable-next-line to ignore the next line.
    //Use /* eslint-disable */ to ignore all warnings in a file.
    /* eslint-disable */
    const CANVAS_WIDTH = 350;
    const CANVAS_HEIGHT = 350;

    let pieSize = 51.4;
    let piePieces = 7;

    let centreX = CANVAS_WIDTH/2;
    let centreY = CANVAS_HEIGHT/2;
    let radius = 120;
    let pieArray = [];
    let rotateAngle = pieSize * Math.PI / 180;
    let startAngle = 0;
    let endAngle = pieSize * Math.PI / 180;

    let colours = ["#BAF4EE", "#4ED4C6", "#BAF4EE", "#4ED4C6", "#BAF4EE", "#4ED4C6", "#FF6347"];
    let labels = ['당첨','꽝','당첨','꽝','당첨','꽝','벌칙'];

    let currentAngle = 0;
    let spin = 0;
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

                this.draw(canvas);
                //console.log("start pieArray : ", pieArray);

                ctx.beginPath();
                ctx.moveTo(centreX, centreY-125);
                ctx.lineTo(centreX+10, centreY-140);
                ctx.lineTo(centreX-10, centreY-140);
                ctx.closePath();

                // the outline
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#666666';
                ctx.stroke();

                // the fill color
                ctx.fillStyle = "#FFCC00";
                ctx.fill();
            },
            draw() {
                let canvas = this.$el.querySelector('#canvas');
                let ctx = canvas.getContext("2d");

                for (let i = 0; i < piePieces; i++) {
                    ctx.fillStyle = colours[i];
                    ctx.translate(centreX, centreY);
                    ctx.rotate(rotateAngle);

                    // if(typeof pieArray[i] !== 'object') {
                    //     pieArray[i] = {
                    //         labels: labels[i],
                    //         degreeStart: (rotateAngle * ((i + 1) % piePieces)) * (180 / Math.PI) % 360,
                    //         degreeEnd: (rotateAngle * ((i + 2) % piePieces)) * (180 / Math.PI) % 360
                    //     };
                    // }

                    ctx.translate(-centreX, -centreY);
                    ctx.beginPath();
                    ctx.moveTo(centreX, centreY);
                    ctx.lineTo(centreX + radius, centreY);
                    ctx.arc(centreX, centreY, radius, startAngle, endAngle, false);
                    ctx.closePath();
                    ctx.fill();
                    ctx.save();

                    ctx.fillStyle = "black";
                    ctx.font = "14px Lucida Sans Unicode";
                    ctx.translate(centreX, centreY);
                    ctx.rotate(120*Math.PI/180);
                    ctx.translate(-centreX, -centreY);
                    ctx.fillText(labels[i], centreX-20, centreY-100);
                    ctx.restore();
                }
            },
            rotate() {
                if(spin === 0) {
                    spin = Math.ceil(Math.random() * 50)+100;
                    // spin = 1;
                    currentAngle = spin*10;
                }

                let canvas = this.$el.querySelector('#canvas');
                let ctx = canvas.getContext("2d");
                ctx.translate(centreX, centreY);
                ctx.rotate( (10 * Math.PI/180) % 360 );
                ctx.translate(-centreX, -centreY);

                // for (let i = 0; i < piePieces; i++) {
                //     pieArray[i].degreeStart = (currentAngle + pieArray[i].degreeStart) % 360;
                //     pieArray[i].degreeEnd = (currentAngle + pieArray[i].degreeEnd) % 360;
                // }

                counter++;
                if(counter < spin) {
                    this.draw();
                    requestAnimationFrame(this.rotate);
                } else {
                    counter = 0;
                    spin = 0;

                    // console.log("angle : " + currentAngle);
                    // console.log("end pieArray : ", pieArray);

                    this.draw();
                    //this.check();
                }

            },
            // check() {
            //     for (let i = 0; i < piePieces; i++) {
            //         if (pieArray[i].degreeStart <= 270 && 270 <= pieArray[i].degreeEnd) {
            //             console.log(pieArray[i].labels);
            //         }
            //     }
            // },
        },
        mounted() {
            this.init();
        },
        name: "roulette"
    }
</script>

<style lang="scss" scoped>
    canvas {
        /*border : 1px solid white;*/
    }
</style>