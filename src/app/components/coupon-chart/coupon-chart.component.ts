import { Component, OnInit } from '@angular/core';
import { Legend } from 'chart.js';

@Component({
  selector: 'app-coupon-chart',
  templateUrl: './coupon-chart.component.html',
  styleUrls: ['./coupon-chart.component.scss'],
})
export class CouponChartComponent implements OnInit {
  data: any;
  options: any;

  couponData: any = [75, 150, 40, 100, 250, 175, 200, 185, 175, 65, 50, 230];
  months: any = [
    'ديسمبر',
    'نوفمبر',
    'أكتوبر',
    'سبتمبر',
    'أغسطس',
    'يوليو',
    'يونيو',
    'مايو',
    'ابريل',
    'مارس',
    'فبراير',
    'يناير',
  ];

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: this.months,

      datasets: [
        {
          data: this.couponData,
          fill: true,
          borderColor: documentStyle.getPropertyValue('--indigo-500'),
          tension: 0.4,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            display: false,
            color: surfaceBorder,
            drawBorder: true,
          },
        },
        y: {
          ticks: {
            display: false,
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
}
