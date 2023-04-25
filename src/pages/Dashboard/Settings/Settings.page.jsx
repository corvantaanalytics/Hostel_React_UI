import { Card, Row, Col, Divider } from 'antd';
import { DashboardLayout } from '../../../layout';
// import './Home.styles.scss';
import './Settings.styles.scss';
import { User, SmsTracking, Lock1, Scan, SecuritySafe } from 'iconsax-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateNameModal } from './UpdateNameModal';
import { UpdateEmailModal } from './UpdateEmailModal';
import { UpdatePasswordModal } from './UpdatePasswordModal';
import { changeMFAstatus, getApiKey, getUserDetails } from 'store/Actions/settings';
import { useNavigate } from 'react-router-dom';
import { EnableMFAModal } from './EnableMFAModal';
import { UpdateAIModal } from './UpdateOpenAI';

function Settings() {
    const [UpdateName, setUpdateName] = useState(false);
    const [UpdateEmail, setUpdateEmail] = useState(false);
    const [UpdatePassword, setUpdatePassword] = useState(false);
    const [UpdateAI, setUpdateAI] = useState(false);
    const [EnableMFA, setEnableMFA] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentToken = sessionStorage.getItem("token");
    const qrCode = sessionStorage.getItem("qrCode");
    const { user,openai } = useSelector((state) => state?.settings)
    const [showSettingValue, setShowSettingValue] = useState(false);
    const [showTruncatedApiKey, setShowTruncatedApiKey] = useState(true);
    const settingValue = sessionStorage.getItem('openAi')

    const handleReveal = () => {
        setShowSettingValue(!showSettingValue);
        setShowTruncatedApiKey(!showTruncatedApiKey);

      };

    useEffect(() => {
        (async () => {
            await dispatch(getUserDetails());
            await dispatch(getApiKey());
        })();
    }, []);
    
    return (
        // currentToken ?
            <DashboardLayout>
                <div className="p-4 md:px-6 dashboard">
                    <h2 className="content-header p-4 pb-2 text-white ">Settings</h2>
                </div>

                <Card className='m-5 mt-0 setting-card'>
                    <UpdateNameModal
                        show={UpdateName}
                        setShow={setUpdateName}
                        type="order"
                    />
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
                        <Col lg={8} className="setting-input py-3">{user?.full_name}</Col>
                        <Col lg={8} className="text-right text-white">
                            <button type="submit" className="cancelButton hover:bg-blue-700 text-white w-[100px] h-12 hover:bg-pink-600/[.8] ease-in duration-200"
                                onClick={() => setUpdateName(true)}>
                                Update
                            </button>
                        </Col>
                    </Row>
                    <Divider className='setting-divider m-0' />
                    <UpdateEmailModal
                        show={UpdateEmail}
                        setShow={setUpdateEmail}
                        type="order"
                    />
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
                        <Col lg={8} className="setting-input py-3">{user?.email}</Col>
                        <Col lg={8} className="text-right text-white">
                            <button type="submit" className="cancelButton hover:bg-blue-700 text-white w-[100px] h-12 hover:bg-pink-600/[.8] ease-in duration-200"
                                onClick={() => setUpdateEmail(true)}>
                                Update
                            </button>
                        </Col>
                    </Row>
                    <Divider className='setting-divider m-0' />
                    <UpdatePasswordModal
                        show={UpdatePassword}
                        setShow={setUpdatePassword}
                        type="order"
                    />
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
                        <Col lg={8} className="setting-input py-3">{user?.password}••••••••••••<span className='pl-5 text-[#6C757D]'></span></Col>
                        <Col lg={8} className="text-right text-white">
                            <button type="submit" className="cancelButton hover:bg-blue-700 text-white w-[100px] h-12 hover:bg-pink-600/[.8] ease-in duration-200"
                                onClick={() => setUpdatePassword(true)}>
                                Update
                            </button>
                        </Col>
                    </Row>
                    <Divider className='setting-divider m-0' />
                    <EnableMFAModal
                        show={EnableMFA}
                        setShow={setEnableMFA}
                        type="order"
                    />
                    <Row className='p-2'>
                        <Col lg={8} className="text-white py-3 px-3">
                            <Row>
                                <Col className='pt-1'>
                                    <Scan size="16" color='#0096C7' variant='Outline' />
                                </Col>
                                <Col>
                                    <span className='setting-label pl-2'>Multi Factor Authentication</span>
                                </Col>
                            </Row>
                        </Col>
                        {user?.is_mfa_enabled
                            ?
                            <Col lg={8} className="setting-status-enabled py-3">
                                <span className='p-2 bg--enabled'>
                                    Enabled
                                </span>

                            </Col>
                            :
                            <Col lg={8} className="setting-status py-3">
                                <span className='p-2 bg-status'>
                                    Disabled
                                </span>

                            </Col>}


                        <Col lg={8} className="text-right text-white">
                            <button type="submit" className="cancelButton hover:bg-blue-700 text-white w-[120px] h-12 hover:bg-pink-600/[.8] ease-in duration-200"
                                onClick={() => {
                                    dispatch(changeMFAstatus(setEnableMFA))
                                }
                                }>
                                Enable MFA
                            </button>

                        </Col>
                    </Row>
                    <Divider className='setting-divider m-0' />
                    <UpdateAIModal
                        show={UpdateAI}
                        setShow={setUpdateAI}
                        type="order"
                    />
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
                        <Col lg={8} className="setting-input py-3">{settingValue ? (showSettingValue ? settingValue:settingValue.substring(0, 7) + "................") : ("NA") }<span type="submit" className='pl-5 text-[#6C757D]'onClick={handleReveal}>{showTruncatedApiKey ? "Reveal" : "Hide"}</span></Col>
                        <Col lg={8} className="text-right text-white">
                            <button type="submit" className="cancelButton hover:bg-blue-700 text-white w-[100px] h-12 hover:bg-pink-600/[.8] ease-in duration-200"
                                onClick={() => setUpdateAI(true)}>
                                Update
                            </button>
                        </Col>
                    </Row>

                </Card>
            </DashboardLayout>
            // : navigate(`/sign-in`)
    );
}
export default Settings;