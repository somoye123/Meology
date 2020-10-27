import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import setLoadingStatus from '../redux/actions/loadingAction';
import { loadMeals } from '../redux/actions/mealsAction';

const MealList = () => (
  <section className="section">
    <h2 className="section-title">Meals</h2>
  </section>
);

const mapStateToProps = ({ SearchTerm, Meals, Loading }) => ({ SearchTerm, Meals, Loading });

const mapDispatchToProps = { setLoadingStatus, loadMeals };

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
