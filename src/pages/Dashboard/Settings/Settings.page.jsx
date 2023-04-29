import { Card, Row, Col, Divider } from 'antd';
import { DashboardLayout } from '../../../layout';
import './Settings.styles.scss';
import { User, SmsTracking, Lock1, Scan, SecuritySafe } from 'iconsax-react';
import { useDispatch} from 'react-redux';


function Settings() {


    const dispatch = useDispatch();

    return (
            <DashboardLayout>
                <div className="p-4 md:px-6 dashboard">
                    <h2 className="content-header p-4 pb-2 text-white ">Settings</h2>
                </div>

                <Card className='m-5 mt-0 setting-card'>
                    <Row className='p-2'>
                        <Col lg={8} className="text-white py-3 px-3">
                            <Row>
                                <Col className='pt-1'>
                                    <User size="16" color='#0096C7' variant='Outline' />
                                </Col>
                                <Col>
                                    <span className='setting-label pl-2'>Full Name</span>
                                </Col>

                            </Row>
                        </Col>
                        <Col lg={8} className="setting-input py-3">WOw Hostel</Col>
                        <Col lg={8} className="text-right text-white">
                            <button type="submit" className="cancelButton hover:bg-blue-700 text-white w-[100px] h-12 hover:bg-pink-600/[.8] ease-in duration-200"
                                >
                                Update
                            </button>
                        </Col>
                    </Row>
                    <Divider className='setting-divider m-0' />
                    <Row className='p-2'>
                        <Col lg={8} className="text-white py-3 px-3">
                            <Row>
                                <Col className='pt-1'>
                                    <SmsTracking size="16" color='#0096C7' variant='Outline' />
                                </Col>
                                <Col>
                                    <span className='setting-label pl-2'>Email Address</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={8} className="setting-input py-3">wowhostel@gmail.com</Col>
                        <Col lg={8} className="text-right text-white">
                            <button type="submit" className="cancelButton hover:bg-blue-700 text-white w-[100px] h-12 hover:bg-pink-600/[.8] ease-in duration-200"
                            >
                                Update
                            </button>
                        </Col>
                    </Row>
                    <Divider className='setting-divider m-0' />
                    <Row className='p-2'>
                        <Col lg={8} className="text-white py-3 px-3">
                            <Row>
                                <Col className='pt-1'>
                                    <Lock1 size="16" color='#0096C7' variant='Outline' />
                                </Col>
                                <Col>
                                    <span className='setting-label pl-2'>Password</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={8} className="setting-input py-3">••••••••••••<span className='pl-5 text-[#6C757D]'></span></Col>
                        <Col lg={8} className="text-right text-white">
                            <button type="submit" className="cancelButton hover:bg-blue-700 text-white w-[100px] h-12 hover:bg-pink-600/[.8] ease-in duration-200"
                                >
                                Update
                            </button>
                        </Col>
                    </Row>
                    <Divider className='setting-divider m-0' />
                    <Divider className='setting-divider m-0' />
                    <Row className='p-2'>
                        <Col lg={8} className="text-white py-3 px-3">
                            <Row>
                                <Col className='pt-1'>
                                    <SecuritySafe size="16" color='#0096C7' variant='Outline' />
                                </Col>
                                <Col>
                                    <span className='setting-label pl-2'>OpenAI Key </span>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={8} className="setting-input py-3"><span type="submit" className='pl-5 text-[#6C757D]'></span>Nil</Col>
                        <Col lg={8} className="text-right text-white">
                            <button type="submit" className="cancelButton hover:bg-blue-700 text-white w-[100px] h-12 hover:bg-pink-600/[.8] ease-in duration-200"
                               >
                                Update
                            </button>
                        </Col>
                    </Row>

                </Card>
            </DashboardLayout>
    );
}
export default Settings;