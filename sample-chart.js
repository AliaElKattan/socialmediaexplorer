import Chart from 'chart.js/auto'
import { Colors } from 'chart.js';

Chart.register(Colors);

(async function() {
  const data1 = [
    { year: "Total encryption", count: 10 },
    { year: "Some encryption", count: 20 },
    { year: "No encryption", count: 15 },
  ];

    const data2 = [
    { year: "Decentralized", count: 18 },
    { year: "Centralized", count: 12 }
  ];


      const data3 = [
    { year: "Crowdfunding", count: 20 },
    { year: "Ads", count: 10 },
    { year: "Sales", count: 2 },
    { year: "Subscription", count: 5 }
    // ,{ year: "Privately financed", count: 15}
  ];

  // new Chart(
  //   document.getElementById('sample-chart'),
  //   {
  //     type: 'pie',
  //     title: 'Governance',
  //     data: {
  //       labels: data.map(row => row.year),
  //       datasets: [
  //         {
  //           label: 'Governance',
  //           data: data.map(row => row.count)
  //         }
  //       ]
  //     }
  //   }
  // );

  new Chart(
    document.getElementById('pie-1'),
    {
      type: 'pie',
      data: {
        labels: data1.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data1.map(row => row.count),
             backgroundColor: ['rgb(70, 70, 250)', 'rgb(55,200,55)', 'rgb(150,150,150)']
          }
        ]
      },
      options: {
    plugins: {
      title: {
        display: true,
        text: 'Privacy',
      }
    }
  }
    }
  );


  new Chart(
    document.getElementById('pie-2'),
    {
      type: 'pie',
      data: {
        labels: data2.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data2.map(row => row.count),
            backgroundColor: ['rgb(70, 70, 250)', 'rgb(55,200,55)', 'rgb(150,150,150)']
          }
        ]
      },
      options: {
    plugins: {
      title: {
        display: true,
        text: 'Governance',
      }
    }
  }
    }
  );

    new Chart(
    document.getElementById('pie-3'),
    {
      type: 'pie',
      data: {
        labels: data3.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data3.map(row => row.count),
            backgroundColor: ['rgb(70, 70, 250)', 'rgb(55,200,55)', 'rgb(150,150,150)', 'rgb(100,100,0)']
          }
        ]
      },
       options: {
    plugins: {
      title: {
        display: true,
        text: 'Monetization',
      }
    }
  }
    }
  );


})();

 