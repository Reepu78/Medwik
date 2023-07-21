using Twilio.Rest.Api.V2010.Account;

namespace Medwik_API.Services
{
    public interface ISMSService
    {
        Task<MessageResource> SendSMS( string message, string to);
    }
}
