import { ConnectionStatus, ILoginRequest, ISignupRequest, InviteInfo } from "@chattr/interfaces";
import { MediaKind, RtpCapabilities, RtpParameters } from "mediasoup-client/lib/RtpParameters";
import { DtlsParameters, TransportOptions } from "mediasoup-client/lib/Transport";
import { MediaDevice } from "../services/room.service";

export class FindDevices {
  static type = '[Device] Find Devices';
}

export class DevicesFound {
  static type = '[Device] Devices Found';
  constructor(readonly devices: MediaDevice[]) { }
}

export class SetAudioDevice {
  static type = '[Device] Set Audio device';
  constructor(readonly id?: string) { }
}

export class SetVideoDevice {
  static type = '[Device] Set Video Device';
  constructor(readonly id?: string) { }
}

export class SaveDeviceConfig {
  static type = '[Device] Save Device Config';
}

export class SignIn implements ILoginRequest {
  static type = '[User] Sign in';
  constructor(readonly email: string, readonly password: string) { }
}

export class SignUp implements ISignupRequest {
  static type = '[User] Sign up';
  constructor(readonly email: string, readonly name: string, readonly password: string) { }
}

export class SignOut {
  static type = '[User] Sign out';
}

export class UserSessionUpdated {
  static type = '[User] Session updated';
  constructor(readonly signedIn: boolean) { }
}

export class CreateRoom {
  static type = `[Room] Create room`;
  constructor(readonly name: string) { }
}

export class LoadRooms {
  static type = '[Room] Load rooms'
}

export class ConnectToRoom {
  static type = `[Room] Set Connected Room`;
  constructor(readonly id: string) { }
}

export class ConnectedRoomChanged {
  static type = `[Room] Connected Room Changed`;
}

export class ClearConnectedRoom {
  static type = `[Room] Clear Connected`;
}

export class JoinSession {
  static type = '[Room] Join Session';
  constructor(readonly id: string) { }
}

export class LeaveSession {
  static type = '[Room] Leave Session';
  constructor(readonly id: string) { }
}

export class SessionJoined {
  static type = '[Room] Session Joined';
  constructor(readonly transportParams: TransportOptions, readonly rtpCapabilities: RtpCapabilities, readonly sessionId: string) { }
}

export class ConnetSessionTransport {
  static type = '[Room] Connect Session Transport';
  constructor(readonly sessionId: string, readonly dtlsParameters: DtlsParameters) { }
}

export class TransportConnected {
  static type = '[Room] Transport Connected';
  constructor(readonly sessionId: string) { }
}

export class CreateServerSideProducer {
  static type = `[Room] Create Server-side Producer`;
  constructor(readonly sessionId: string, readonly kind: MediaKind, readonly rtpParameters: RtpParameters) { }
}

export class ServerSideProducerCreated {
  static type = `[Room] Server-side Producer Created`;
  constructor(readonly producerId: string, readonly sessionId: string, readonly kind: MediaKind) { }
}

export class UpdateConnectionStatus {
  static type = `[Room] Update Connection Status`;
  constructor(readonly status: ConnectionStatus, readonly reason?: string) { }
}

export class RoomError extends Error {
  static type = `[Room] Error`;
  constructor(message: string, readonly roomId: string, readonly sessionId?: string) {
    super(message);
  }
}

export class CreateServerSideConsumer {
  static type = `[Room] Create Server-side Consumer`;
  constructor(readonly producerId: string, readonly sessionId: string, readonly rtpCapabilities: RtpCapabilities) { }
}

export class ServerSideConsumerCreated {
  static type = `[Room] Server-side Consumer created`;
  constructor(readonly id: string, readonly kind: MediaKind, readonly sessionId: string, readonly producerId: string, readonly rtpParameters: RtpParameters) { }
}

export class StatsSubscribe {
  static type = `[Room] Get Consumer Stats`;
  constructor(readonly id: string, readonly type: 'consumer' | 'producer') { }
}

export class StatsEnded {
  static type = `[Room] Stats Ended`;
  constructor(readonly id: string) { }
}

export class StatsUpdated {
  static type = `[Room] Stats Fetched`;
  constructor(readonly id: string, readonly stats: RTCStatsReport, readonly type: 'consumer' | 'producer') { }
}

export class CloseServerSideConsumer {
  static type = `[Room] Close Server-side Consumer`;
  constructor(readonly consumerId: string) { }
}

export class ToggleConsumerStream {
  static type = `[Room] Toggle Consumer Stream`;
  constructor(readonly consumerId: string) { }
}

export class ConsumerStreamToggled {
  static type = `[Room] Consumer Stream Toggled`;
  constructor(readonly consumerId: string, readonly paused: boolean) { }
}

export class ToggleAudio {
  static type = '[Device] Toggle Audio';
}

export class ToggleVideo {
  static type = '[Device] Toggle Video';
}

export class CloseServerSideProducer {
  static type = '[Room] Close Server-side Producer';
  constructor(readonly sessionId: string, readonly producerId: string) { }
}

export class RemoteSessionClosed {
  static type = '[Room] Remote Session Closed';
  constructor(readonly sessionId: string) { }
}

export class RemoteSessionOpened {
  static type = '[Room] Remote Session opened';
  constructor(readonly sessionId: string) { }
}

export class RemoteProducerOpened {
  static type = '[Room] Remote Producer opened';
  constructor(readonly sessionId: string, readonly producerId: string) { }
}

export class RemoteProducerClosed {
  static type = '[Room] Remote Producer closed';
  constructor(readonly sessionId: string, readonly producerId: string) { }
}

export class CreateInviteLink {
  static type = '[Room] Create invite link';
  constructor(readonly redirectPath: string, readonly key: string) { }
}

export class LoadInvitationInfo {
  static type = `[Room] Load Invitation Info`;
  constructor(readonly code: string) { }
}

export class InvitationInfoLoaded {
  static type = '[Room] Invitation Info Loaded';
  constructor(readonly info: InviteInfo) { }
}

export class UpdateInvite {
  static type = '[Room] Update Invite'
  constructor(readonly accepted: boolean, readonly code: string) { }
}

export class SpeakingSessionChanged {
  static type = '[Room] Speaking Session Changed';
  constructor(readonly sessionId: string) { }
}

export class CreatePresentation {
  static type = '[Room] Create Presentation';
}

export class PresentationUpdated {
  static type = '[Room] Presentation Updated';
  constructor(readonly id: string, readonly timestamp: Date) { }
}

export class JoinPresentation {
  static type = '[Room] Join Presentation';
  constructor(readonly id: string) { }
}

export class PresentationJoined {
  static type = '[Room] Presentation Joined';
  constructor(readonly id: string, readonly transportParams: TransportOptions, readonly rtpCapabilities: RtpCapabilities) { }
}

export class ConnectPresentationTransport {
  static type = '[Room] Connect Presentation Transport';
  constructor(readonly presentationId: string, readonly dtlsParameters: DtlsParameters) { }
}

export class PresentationTransportConnected {
  static type = '[Room] Presentation Transport Connected';
  constructor(readonly presentationId: string) { }
}

export class CreatePresentationProducer {
  static type = '[Room] Create Presentation Producer';
  constructor(readonly presentationId: string, readonly rtpParameters: RtpParameters) { }
}

export class PresentationProducerCreated {
  static type = '[Room] Presentation Producer Created';
  constructor(readonly presentationId: string, readonly producerId: string) { }
}

export class PresentationStarted {
  static type = '[Room] Presentation Started';
  constructor(readonly id: string, readonly producerId: string) { }
}

export class CreatePresentationConsumer {
  static type = '[Room] Create Server-side Presentation Consumer';
  constructor(readonly producerId: string, readonly presentationId: string, readonly rtpCapabilities: RtpCapabilities) { }
}

export class PresentationConsumerCreated {
  static type = '[Room] Presentation Consumer Created';
  constructor(readonly presentationId: string, readonly producerId: string, readonly rtpParameters: RtpParameters, readonly id: string) { }
}
