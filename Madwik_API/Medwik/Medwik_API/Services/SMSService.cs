using Medwik_API.Entities;
using Microsoft.Extensions.Options;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;

namespace Medwik_API.Services
{
    public class SMSService : ISMSService
    {
        private readonly SMS _sms;
        public SMSService(IOptions<SMS> sms) {

             this._sms = sms.Value;
        }
        public async Task<MessageResource> SendSMS(string message, string to)
        {
            
            TwilioClient.Init(_sms.AccountSID, _sms.AuthToken);

            var result = await MessageResource.CreateAsync(
            body: message,
            from: new PhoneNumber(_sms.PhoneNumber),
            to: new PhoneNumber(to)
            );

            return result;
        }
    }
}
