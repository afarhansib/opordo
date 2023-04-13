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
      },
      series: [
        {
          name: "Position",
          data: [],
        },
      ],
    };
  },

  actions: {
    updateScrollPos(sp) {
      // console.log(sp.target.scrollTop)
      this.scrollPos = Math.round(sp.target.scrollTop);
      this.series[0].data.push(this.scrollPos)
    },
    resetPoint() {
      this.series[0].data = []
      // el.scrollTop = 0
      // console.log(this.series[0].data)

      // console.log(newData)
      // this.series = [
      //   {data: newData}
      // ]
    }
  },
});
