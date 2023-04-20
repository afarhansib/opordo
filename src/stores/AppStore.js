import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state() {
    return {
      scrollPos: 42,
      chartOptions: {
        chart: {
          id: "apexchart"
        },
        yaxis: {
          labels: {
            show: false,
          }
        },
        xaxis: {
          labels: {
            show: false,
          }
        },
        dataLabels: {
          enabled: false,
        },
      },
      chartOptionsCandle: {
        plotOptions: {
          candlestick: {
            colors: {
              upward: '#3C90EB',
              downward: '#DF7D46'
            },
            wick: {
              useFillColor: false,
            },
          }
        }
      },
      series: [
        {
          name: "Position",
          data: [],
        },
      ],
      seriesCandle: [
        {
          name: "Position",
          data: [
            [1, 1, 2, 3, 3],
            [2, 4, 4, 7, 7],
            [3, 9, 9, 12, 12],
            [4, 5, 5, 15, 15],
            [5, 7, 7, 14, 14],
          ],
          // data: [{
          //   x: new Date(),
          //   y: [6604.44, 6604.44, 6600, 6603.5]
          // },
          // {
          //   x: new Date(),
          //   y: [6603.5, 6603.99, 6597.5, 6603.86]
          // },
          // {
          //   x: new Date(),
          //   y: [6604.98, 6606, 6604.07, 6606]
          // }
          // ],
        },
      ],
    };
  },

  actions: {
    updateScrollPos(sp) {
      // console.log(sp.target.scrollTop)
      let xer = 1
      if (this.scrollPos < sp.target.scrollTop) {
        xer = -1
      }
      this.scrollPos = Math.round(sp.target.scrollTop);
      this.series[0].data.push(this.scrollPos * xer)

    },
    resetPoint() {
      console.log(JSON.stringify(this.series[0].data))
      this.series[0].data = []
      // el.scrollTop = 0

      // console.log(newData)
      // this.series = [
      //   {data: newData}
      // ]
    }
  },
});
