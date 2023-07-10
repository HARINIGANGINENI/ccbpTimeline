import styled from 'styled-components/macro'

export const CourseTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
export const CourseTitle = styled.h1`
  color: #171f4b;
  font-family: 'Roboto';
`
export const DurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Duration = styled.p`
  color: #171f4b;
  font-family: 'Roboto';
`
export const CourseDescription = styled.p`
  color: #171f4b;
  font-family: 'Roboto';
`
export const CourseTagsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const CourseTagItem = styled.li`
  list-style-type: none;
`

export const CourseTag = styled.p`
  color: #171f4b;
  font-family: 'Roboto';
`
