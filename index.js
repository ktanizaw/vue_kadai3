const vm = new Vue({
  el: '#app',
  data: {
    defaultLastId: 3,
    students: [
      { id: 1, name: 'テスト太郎１', cource: '機械学習コース', period: '2019年01月期' },
      { id: 2, name: 'テスト太郎２', cource: 'Webエンジニアコース', period: '2017年11月期' },
      { id: 3, name: 'テスト太郎３', cource: 'Webエンジニアコース', period: '2017年11月期' }

    ],
    newStudentName: 'テスト太郎',
    newStudentCource: 'Webエンジニアコース',
    newStudentPeriod: '2019年01月期'
  },
  methods: {  //methodsオプションをまるっと追加
    addStudents: function(){
      this.students.push({
        id: this.defaultLastId + 1,
        name: this.newStudentName,
        cource: this.newStudentCource,
        period: this.newStudentPeriod
      });
      this.newStudentName = '';
      this.newStudentCource = '';
      this.newStudentPeriod = '';
    },
  }
})
