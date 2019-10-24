import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './planets.scss';
import { connect } from 'react-redux';
import { getPlanets, getVehicles, getToken, findFelcon } from '../redux/action'
import { Select } from 'antd';
import { ToastContainer, toast } from 'react-toastify';

const { Option } = Select;

class Planets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlanets: [],
            selectedVehicles: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleVehicleChange = this.handleVehicleChange.bind(this);
        this.findFelcon = this.findFelcon.bind(this)
    }
    componentDidMount() {
        this.props.getPlanets();
        this.props.getVehicles();
        this.props.getToken()
    }
    handleChange(e) {
        this.setState({ selectedPlanets: e })
        console.log(e)
    }
    handleVehicleChange(e) {
        this.setState({ selectedVehicles: e })
        console.log(e)
    }
    findFelcon() {
        const { findFelcon } = this.props;
        let obj = {
            token: this.props.token,
            planet_names: this.state.selectedPlanets,
            vehicle_names: this.state.selectedVehicles
        }
        console.log(obj)
        findFelcon(obj)
    }

    render() {
        const { planetResult, vehicleResult, error, felconResult } = this.props;

        if (planetResult && vehicleResult) {
            return (
                <div className="App">
                <p class="heading">GeekTrust Front End Test</p>
                    {
                        error || felconResult ? <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER}
                            hideProgressBar={true} /> : null
                    }
                    <div className="select">
                        <label>Planets</label>
                        <Select
                            mode="tags"
                            placeholder="Please select planets"
                            onChange={this.handleChange}
                            style={{ width: '100%' }}
                        >
                            {planetResult.map((key, i) => {
                                return <Option key={key.name}>{key.name}</Option>
                            })}
                        </Select>
                    </div>
                    <div className="select">
                        <label>Vehicles</label>
                        <Select
                            mode="tags"
                            placeholder="Please select vehicle"
                            onChange={this.handleVehicleChange}
                            style={{ width: '100%' }}
                        >
                            {vehicleResult.map((key, i) => {
                                return <Option key={key.name}>{key.name}</Option>
                            })}
                        </Select>
                    </div>
                    <div className="select">
                        <Button type="primary" onClick={this.findFelcon}>Find</Button>
                    </div>
                </div>
            )
        }
        else {
            return null;
        }

    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        planetResult: state.commonreducer.planetResult,
        vehicleResult: state.commonreducer.vehicleResult,
        token: state.commonreducer.token,
        error: state.commonreducer.error,
        felconResult: state.commonreducer.felconResult
    }
}


export default connect(mapStateToProps, { getPlanets, getVehicles, getToken, findFelcon })(Planets);
