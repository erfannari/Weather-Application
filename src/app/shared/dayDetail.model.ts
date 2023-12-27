export class DayDetail {
  public dayName: string = '';
  public conditionIcon: string = '';
  public conditionText: string = '';
  public maxTemp: string = '';
  public minTemp: string = '';
  constructor(
    dayName: string,
    conditionIcon: string,
    conditionText: string,
    maxTemp: string,
    minTemp: string,
  ) {
    this.dayName = dayName;
    this.conditionIcon = conditionIcon;
    this.conditionText = conditionText;
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
  }
}
