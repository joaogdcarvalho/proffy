import React from 'react';
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/teacherItem';
import Input from '../../components/input';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />
          <Input name="week_day" label="Dia da semana" />
          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;